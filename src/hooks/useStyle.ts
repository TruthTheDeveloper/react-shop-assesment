export const useToggleBodyScroll = (dep: boolean) => {
  if (dep) document.body.style.overflow = "visible"; //hidden
  else document.body.style.overflow = "hidden";
};
