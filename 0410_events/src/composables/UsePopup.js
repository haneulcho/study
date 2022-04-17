import { ref, computed } from 'vue'

const UsePopup = () => {
  let openPopupIds = ref(['일식', '윤상', '도원', '하늘']);
  
  const closePopup = (popupId) => {
    openPopupIds.value = openPopupIds.value.filter(popup => popup !== popupId)
  }
  
  const openPopup = (popupId) => {
    const newZindex = document.querySelector(openPopupIds.value[openPopupIds.value.length-1]).style.zIndex + 1;
      document.querySelector(popupId).style.zIndex = newZindex
    openPopupIds.value.push(popupId)
  }
  
  const handleIds = () => {
    openPopupIds.value = 333333
  }

  return {
    openPopupIds,
    closePopup,
    openPopup,
    handleIds
  }
}

export default UsePopup