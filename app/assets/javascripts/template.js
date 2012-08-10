$(function(){
    var id = 5;
    $("#demo")

    .bind("before.jstree", function (e, data) {
        $("#alog").append(data.func + "<br />");
    })
    .jstree({
        "plugins" : [
            "themes","json_data","ui","crrm","cookies","dnd","search","types","hotkeys","contextmenu" 
        ],
        "json_data" : {
            "ajax" : {
                "url" : "ajax_new",
                "data" : function (n) {
                    return {
                        "operation" : "get_children",
                        "id" : n.attr ? n.attr("id").replace("node_","") : 1
                    };
                }
            }
        },
        "types" : {
            "max_depth" : -2,
            "max_children" : -2,
            "valid_children" : [ "drive" ],
            "types" : {
                "number" : {
                    "valid_children" : "none",
                    "icon" : {
                        "image" : "../../stylesheets/number.png"
                    }
                },
                "date" : {
                    "valid_children" : "none",
                    "icon" : {
                        "image" : "../../stylesheets/date.png"
                    }
                },
                "text" : {
                    "valid_children" : "none",
                    "icon" : {
                        "image" : "../../stylesheets/file.png"
                    }
                },
                "folder" : {
                    "valid_children" : [ "number","date","text", "folder" ],
                    "icon" : {
                        "image" : "../../stylesheets/folder.png"
                    }
                },
                "drive" : {
                    "valid_children" : [ "number","date","text", "folder" ],
                    "icon" : {
                        "image" : "../../stylesheets/root.png"
                    },
                    "start_drag" : false,
                    "move_node" : false,
                    "delete_node" : false,
                    "remove" : false
                }
            }
        },
        "ui" : {
            "initially_select" : [ "node_4" ]
        },
        "core" : {
            "initially_open" : [ "node_2" , "node_3" ]
        }
    })



    $("#mmenu input").click(function () {
        switch(this.id) {
            case "add_date":
            case "add_text":
            case "add_number":
            case "add_folder":
                $("#demo").jstree("create", null, "last", { "attr" : { "rel" : this.id.toString().replace("add_", "") } });
                qwe = { "attr" : { "rel" : this.id.toString().replace("add_", "") } };
                console.log(qwe)
                break;
            default:
                $("#demo").jstree(this.id);
                break;
        }
    });

});