var popup=document.querySelector(".form-wrap");popup&&popup.classList.toggle("form-show");var button=document.querySelector(".offers-button"),checkin=popup.querySelector("[name=checkin]"),checkout=popup.querySelector("[name=checkout]"),adults=popup.querySelector("[name=adults]"),children=popup.querySelector("[name=children]"),form=popup.querySelector("form");button.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("form-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){checkin.value&&checkout.value&&adults.value||(e.preventDefault(),popup.classList.remove("modal-error"),form.offsetWidth=form.offsetWidth,popup.classList.add("modal-error"))});