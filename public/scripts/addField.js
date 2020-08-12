document.querySelector("#add-time")
    .addEventListener("click", cloneField)

function cloneField() {

    const newFieldContainer = document.querySelector('.scheldule-item').cloneNode(true)


    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#scheldule-items').appendChild(newFieldContainer)
}