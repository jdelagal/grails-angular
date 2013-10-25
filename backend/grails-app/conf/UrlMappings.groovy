class UrlMappings {

	static mappings = {
        "/$controller"{
            action = [
                GET:"index",
                POST: "save",
            ]
        }

        "/$controller/$id"{
            action = [
                GET:"show",
                POST: "update",
                DELETE: "delete",
                OPTIONS: "show"
            ]
        }



        "/"(view:"/index")
        "500"(view:'/error')
	}
}
