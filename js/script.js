var isDropdownTriggered = 0;
const dropDownVariants = ["drop-down", "drop-up"];
function dropdown() {
    document.getElementById("browse-dropdown").classList.toggle("reveal");
    document.getElementById("drop-down").classList.toggle("show");
}
// window.onclick = (e) => {
//     if (!e.target.matches(".browse-btn")) {
//         var myDropdown = document.getElementById("browse-dropdown");
//         if (myDropdown.classList.contains("reveal")) {
//             myDropdown.classList.remove("reveal");
//         }
//     }
// };
