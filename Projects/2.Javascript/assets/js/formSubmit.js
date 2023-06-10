export const form = document.querySelector(
  ".monticello-footer-contactbox-form"
);

export const renderFormData = function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  console.log(
    JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
    })
  );
};

export const successIconOnSumbit = function () {
  const formContainer = document.querySelector(
    ".monticello-footer-contactbox-form-container"
  );
  const newSuccessIcon = document.createElement("div");
  newSuccessIcon.classList.add("swal-icon swal-icon--success");

  const newFirstSpan = document.createElement("span");
  newFirstSpan.classList.add(
    "swal-icon--success__line swal-icon--success__line--long"
  );

  const newSecondSpan = document.createElement("span");
  newSecondSpan.classList.add(
    "swal-icon--success__line swal-icon--success__line--tip"
  );

  const newRingIcon = document.createElement("div");
  newRingIcon.classList.add("swal-icon--success__ring");

  const newIconWithoutCorners = document.createElement("div");
  newIconWithoutCorners.classList.add("swal-icon--success__hide-corners");

  newSuccessIcon.append(
    newFirstSpan,
    newSecondSpan,
    newRingIcon,
    newIconWithoutCorners
  );

  formContainer.innerHTML = "";
  formContainer.append(newSuccessIcon);
};
