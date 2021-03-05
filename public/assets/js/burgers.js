// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// document.addEventListener('DOMContentLoaded', (event) => {
//     if (event) {
//         console.info('DOM loaded');
//     }
    $(function () {
        $(".move-devoured").on("click", function (event) {
            var id = $(this).data("id");
            var newlyDevoured = $(this).data("newlyDevoured");
            console.log(newlyDevoured);
            var nowDevoured = {
                devoured: true
            };

            //send put/update request

            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: nowDevoured
            }).then(
                function () {
                    console.log("changed from devoured to", newlyDevoured);
                    //reload page 
                    location.reload();
                }
            );
        });

        //send delete route 
        $(".delete-burger").on("click", function (event){
            let id = $(this).data("id");

            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then (
                function () {
                    console.log("deleted burger id: ", id);
                    location.reload();
                }
            );
        });


        $(".create-form").on("submit", function (event){
            event.preventDefault();

            var addBurger = {
                burger_name: $("#burger").val().trim(),
                // devoured: false
            };
            console.log(addBurger);


            //send post request 
            $.ajax("/api/burgers", {
                type: "POST",
                data: addBurger
            }).then(
                function(){
                    console.log("new burger created")

                    location.reload(); 
                },
            );
        });
    });

