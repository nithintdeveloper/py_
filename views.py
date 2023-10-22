def gcp_ajax(request):
        apis = {"predefined": [
            {
                "apiId": 100,
                "api": "API100",
                "family": "F1",
                "selected": True,
                "isDefault": False
            },
            {
                "apiId": 101,
                "api": "API101",
                "family": "F2",
                "selected": False,
                "isDefault": True
            },
            {
                "apiId": 200,
                "api": "API200",
                "family": "Others",
                "selected": True,
                "isDefault": False
            },
            {
                "apiId": 202,
                "api": "API202",
                "family": "Others",
                "selected": True,
                "isDefault": False
            }

        ],
            "otherApis": [
                {
                    "apiId": 200,
                    "api": "API200",
                    "family": "",
                    "selected": True,
                },
                {
                    "apiId": 201,
                    "api": "API202",
                    "family": "",
                    "selected": False,
                },
                {
                    "apiId": 202,
                    "api": "API202",
                    "family": "",
                    "selected": True,
                },
                {
                    "apiId": 204,
                    "api": "API204",
                    "family": "",
                    "selected": False,
                }
            ]
        }

        print(apis)
    return render(request, 'gcp_ajax.html', {'apis': apis})

