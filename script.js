const courseItem = document.querySelectorAll(".courses_list_item_main");
// const submitBtn = document.querySelectorAll(".submit")
courseItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    const detailDiv = e.target.nextElementSibling;
    const arrow = e.target.children[0];
    if (!detailDiv.classList.contains("detail_show")) {
      detailDiv.classList.add("detail_show");
      arrow.classList.add("arrow_up");
    } else {
      detailDiv.classList.remove("detail_show");
      arrow.classList.remove("arrow_up");
    }
  });
});

// submitBtn.forEach(item => {
//     item.addEventListener("click", async()=> {
//         const res = await fetch("", {
//             method: "POST",
//             body
//         })
//     })
// })
