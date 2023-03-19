import Icon from "@ant-design/icons/lib/components/Icon";

const LogOutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3334 14.1663L17.5 9.99967L13.3334 5.83301" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 10H7.5" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)

export const Logout = () => (
  <Icon component={LogOutIcon} />
)