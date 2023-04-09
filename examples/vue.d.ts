interface UserInfo {
  admin: boolean;
  id: string;
  loginFlag: boolean;
  mobile: string;
  name: string;
  orgId: number;
  orgName: string;
  permissionUserId: number;
  userNumber: string;
}

declare module 'vue/types/vue' {
  interface Vue {
    $getUserInfo: () => UserInfo;
  }
}
