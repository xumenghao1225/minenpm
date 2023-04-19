<template>
	<div>
		<CodeBox>
			<template #source>
				<Button type="primary" size="large" :loading="pedding" @click="exportClick" :disabled="pedding">导出excel</Button>
			</template>
			<template> 实现源码 </template>
			<template #highlight>
				<pre>
          <code class="language-javascript">
            interface IEnumerable{
              id: string,
              name: string
              url: string,
              price: number,
              createAt: Date
            }
            import { Component, Vue } from "vue-property-decorator";
            import Mock from "mockjs"
            import { write, utils } from "xlsx"
            import chunk from "lodash/chunk"
            import delay from "lodash/delay"
            import { CodeBox } from "../../components"
            import { Button, Message, MessageBox } from "element-ui"
            import fileSaver from "file-saver";
            @Component({
              name: 'ExportExcel',
              components: { Button, CodeBox }
            })
            export default class ExportExcel extends Vue{
              pedding = false;
              genraterData(): Promise{
                return new Promise((resolve, reject)=>{
                  try {
                    const data = Mock.mock({
                      "list|100": [
                        {
                          id: "@id",
                          name: "@cname",
                          url: '@url(https)',
                          price: '@float(0,1100000, 0, 2)',
                          createAt: '@datetime(yyyy-MM-dd hh:mm:ss)'
                        }
                      ]
                    })
                    resolve(data)
                  } catch (error) {
                    reject(error)
                  }
                })
              }

              exportExcel(data: any[], fileName: string) {
                return new Promise((resolve, reject)=>{
                  try {
                    const chunkSize = 10;
                    const chunks = chunk(data, chunkSize);
                    const wb = utils.book_new();
                    let sheetIndex = 0;
                    for (const chunk of chunks) {
                      const ws = utils.json_to_sheet(chunk);
                      utils.book_append_sheet(wb, ws, `Sheet${++sheetIndex}`);
                    }
                    const wbout = write(wb, { bookType: 'xlsx', type: 'array' });
                    const blob = new Blob([wbout], { type: 'application/octet-stream' });
                    fileSaver.saveAs(blob, fileName);
                    resolve()
                  } catch (error) {
                    reject(error)
                  }
                })
              }

              async exportClick(){
                this.pedding = true;
                this.genraterData().then((res)=>{
                  const { list } = res;
                  if(Array.isArray(list)){
                    Message.success(`excel.xlsx开始下载、请稍后`);
                    delay(()=>{
                      this.exportExcel(list, "excel.xlsx").catch(()=>{
                        Message.error("excel.xlsx下载失败了")
                      }).finally(()=>{
                        Message.success("excel.xlsx下载成功啦。撒花。。。")
                        this.pedding = false; 
                      })
                    }, 12000)
                  }
                }).catch(()=>{
                  MessageBox("excel.xlsx获取数据失败了",'提示').finally(()=>{
                    this.pedding = false; 
                  })
                })
                
              }
            }
          </code>
      </pre>
			</template>
		</CodeBox>
	</div>
</template>
<script lang="ts">
interface IEnumerable {
	id: string;
	name: string;
	url: string;
	price: number;
	createAt: Date;
}
import { Component, Vue } from "vue-property-decorator";
import Mock from "mockjs";
import { write, utils } from "xlsx";
import chunk from "lodash/chunk";
import delay from "lodash/delay";
import { CodeBox } from "../../components";
import { Button, Message, MessageBox } from "element-ui";
import fileSaver from "file-saver";
@Component({
	name: "ExportExcel",
	components: { Button, CodeBox },
})
export default class ExportExcel extends Vue {
	pedding = false;
	genraterData(): Promise<{ list: Array<IEnumerable> }> {
		return new Promise((resolve, reject) => {
			try {
				const data: { list: Array<IEnumerable> } = Mock.mock({
					"list|100": [
						{
							id: "@id",
							name: "@cname",
							url: "@url(https)",
							price: "@float(0,1100000, 0, 2)",
							createAt: "@datetime(yyyy-MM-dd hh:mm:ss)",
						},
					],
				});
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}

	exportExcel(data: any[], fileName: string) {
		return new Promise<boolean>((resolve, reject) => {
			try {
				const chunkSize = 10;
				const chunks = chunk(data, chunkSize);
				const wb = utils.book_new();
				let sheetIndex = 0;
				for (const chunk of chunks) {
					const ws = utils.json_to_sheet(chunk);
					utils.book_append_sheet(wb, ws, `Sheet${++sheetIndex}`);
				}
				const wbout = write(wb, { bookType: "xlsx", type: "array" });
				const blob = new Blob([wbout], { type: "application/octet-stream" });
				fileSaver.saveAs(blob, fileName);
				resolve(true);
			} catch (error) {
				reject(error);
			}
		});
	}

	async exportClick() {
		this.pedding = true;
		const { list } = await (<Promise<{ list: IEnumerable[] }>>this.genraterData().catch(() => {
			MessageBox("excel.xlsx获取数据失败了", "提示").finally(() => {
				this.pedding = false;
			});
		}));
		if (Array.isArray(list)) {
			Message.success(`excel.xlsx开始下载、请稍后`);
			delay(async () => {
				const isSuccess = await this.exportExcel(list, "excel.xlsx").catch(() => {
					Message.error("excel.xlsx下载失败了");
				});
				if (isSuccess == true) {
					Message.success("excel.xlsx下载成功啦。撒花。。。");
					this.pedding = false;
				}
			}, 5000);
		}
	}
}
</script>
<style lang="scss" scoped>
.container {
	width: 100%;
	height: 50px;
}
</style>
