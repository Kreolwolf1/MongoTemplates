$(function(){
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
                    "remove" : false,
                    "rename_node" : false,
                    "rename" : false
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
                break;
            default:
                $("#demo").jstree(this.id);
                break;
        }
    });

    function _get_data(object)
    {
        obj = {
            "type"      : object.attr.rel,
            "name"      : object["data"],
            "objects"   : []
        }

        return obj
    }

    $("#save").click(function(){
        tree = $.jstree._focused().get_json()[0];
        buf_array_objs = [tree]
        next_array_obj = []
        root = null;
        while (buf_array_objs.length > 0) {
            for (j in buf_array_objs)
            {
                buff_obj = buf_array_objs[j];

                begin = _get_data(buff_obj);

                if (root) {
                    buff_obj["parent"].push(begin)
                }
                else {
                    root = begin;
                }

                if (buff_obj.children && buff_obj.children.length > 0) {
                    for (i in buff_obj.children)
                    {
                        buff_obj.children[i]["parent"] = begin.objects
                    }
                    next_array_obj = next_array_obj.concat(buff_obj.children)
                }

            }
            buf_array_objs = next_array_obj
            next_array_obj = []
        }
        data = {}
        data["template"] = root
        $.ajax({
            type: "POST",
             url: "/admin/templates/save_template",
            data: data,
            success: function(msg){
              console.log(msg)
            }
        })

    });
});