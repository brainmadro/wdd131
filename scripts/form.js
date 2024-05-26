const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];


if (location.pathname == "/review.html") {
	addReviewSubmition();
} else {
	addOptionsToSelect();
}

function addOptionsToSelect() {
  const productName$ = document.getElementById("productName");
  products.forEach((product) => {
    const option = document.createElement("option");

    option.text =
      product.name.charAt(0).toUpperCase() +
      product.name.slice(1).toLowerCase();
    option.value = product.id;

    productName$.add(option);
  });
}

function addReviewSubmition() {
  if (localStorage) {
    const count = localStorage.getItem("count") || 0;
    localStorage.setItem("count", Number(count) + 1);
  }
}
