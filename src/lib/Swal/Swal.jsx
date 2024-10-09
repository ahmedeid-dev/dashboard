import Swal from "sweetalert2";
import i18n from "i18next";

export const firing = Swal.fire({
    title: `${i18n.t('deletePopUp.title')}`,
    text: `${i18n.t('deletePopUp.text')}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ff0000",
    cancelButtonColor: "#00ff11",
    confirmButtonText: `${i18n.t('deletePopUp.delete')}`,
    cancelButtonText: `${i18n.t('deletePopUp.cancel')}`
})

export const afterFire = Swal.fire({
    title: `${i18n.t('deletePopUp.done')}`,
    text: `${i18n.t('deletePopUp.text2')}`,
    icon: "success"
})