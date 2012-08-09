$(function(){
                $("#treeview-left").kendoTreeView({
                    dragAndDrop: true,
                    dataSource: [
                        { text: "Furniture", expanded: true, items: [
                            { text: "Tables & Chairs" },
                            { text: "Sofas" },
                            { text: "Occasional Furniture" }
                        ] },
                        { text: "Decor", items: [
                            { text: "Bed Linen" },
                            { text: "Curtains & Blinds" },
                            { text: "Carpets" }
                        ] }
                    ]
                }).data("kendoTreeView");

                $("#treeview-right").kendoTreeView({
                    dragAndDrop: true,
                    dataSource: [
                        { text: "Storage", expanded: true, items: [
                            { text: "Wall Shelving" },
                            { text: "Floor Shelving" },
                            { text: "Kids Storage" }
                        ]
                        },
                        { text: "Lights", items: [
                            { text: "Ceiling" },
                            { text: "Table" },
                            { text: "Floor" }
                        ]
                        }
                    ]
                }).data("kendoTreeView");
});