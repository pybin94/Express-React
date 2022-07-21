a= {
    "config": {
        "url": "https://analytics.googleapis.com/analytics/v3/data/ga?ids=ga%3A269574420&metrics=ga%3AuniquePageviews&start-date=1daysAgo&end-date=today&sort=-ga%3AuniquePageviews&max-results=10&filters=ga%3ApagePath%3D~%2Fch_%5B-a-z0-9%5D%2B%5B.%5Dhtml%24",
        "method": "GET",
        "userAgentDirectives": [
            {
                "product": "google-api-nodejs-client",
                "version": "6.0.0",
                "comment": "gzip"
            }
        ],
        "headers": {
            "x-goog-api-client": "gdcl/6.0.0 gl-node/16.15.0 auth/8.1.0",
            "Accept-Encoding": "gzip",
            "User-Agent": "google-api-nodejs-client/6.0.0 (gzip)",
            "Authorization": "Bearer ya29.c.b0AXv0zTOj21BJVDpHl_XjotntNCGLurLxkrnZEcdG0nhATzdNATyXD97eYg_Da5FwVzOKaWrIknUaXShydfPjIi-8phJwd8h8FdEQB43H73d8gFCNphyh357MEePFlC3Wj510lQ6qqu_eXQwzL2ceZ0wRvpNKsaFlKIzGtj1m6om5pPkLpkhiqktmnfjPbt1_8-AuX32dLYg8utLZYy27_6I87EO0FA.........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................",
            "Accept": "application/json"
        },
        "params": {
            "ids": "ga:269574420",
            "metrics": "ga:uniquePageviews",
            "start-date": "1daysAgo",
            "end-date": "today",
            "sort": "-ga:uniquePageviews",
            "max-results": 10,
            "filters": "ga:pagePath=~/ch_[-a-z0-9]+[.]html$"
        },
        "retry": true,
        "responseType": "json"
    },
    "data": {
        "kind": "analytics#gaData",
        "id": "https://www.googleapis.com/analytics/v3/data/ga?ids=ga:269574420&metrics=ga:uniquePageviews&sort=-ga:uniquePageviews&filters=ga:pagePath%3D~/ch_%5B-a-z0-9%5D%2B%5B.%5Dhtml$&start-date=1daysAgo&end-date=today&max-results=10",
        "query": {
            "start-date": "1daysAgo",
            "end-date": "today",
            "ids": "ga:269574420",
            "metrics": [
                "ga:uniquePageviews"
            ],
            "sort": [
                "-ga:uniquePageviews"
            ],
            "filters": "ga:pagePath=~/ch_[-a-z0-9]+[.]html$",
            "start-index": 1,
            "max-results": 10
        },
        "itemsPerPage": 10,
        "totalResults": 0,
        "selfLink": "https://www.googleapis.com/analytics/v3/data/ga?ids=ga:269574420&metrics=ga:uniquePageviews&sort=-ga:uniquePageviews&filters=ga:pagePath%3D~/ch_%5B-a-z0-9%5D%2B%5B.%5Dhtml$&start-date=1daysAgo&end-date=today&max-results=10",
        "profileInfo": {
            "profileId": "269574420",
            "accountId": "232156127",
            "webPropertyId": "UA-232156127-1",
            "internalWebPropertyId": "320062503",
            "profileName": "전체 웹사이트 데이터",
            "tableId": "ga:269574420"
        },
        "containsSampledData": false,
        "columnHeaders": [
            {
                "name": "ga:uniquePageviews",
                "columnType": "METRIC",
                "dataType": "INTEGER"
            }
        ],
        "totalsForAllResults": {
            "ga:uniquePageviews": "0"
        }
    },
    "headers": {
        "alt-svc": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000,h3-Q050=\":443\"; ma=2592000,h3-Q046=\":443\"; ma=2592000,h3-Q043=\":443\"; ma=2592000,quic=\":443\"; ma=2592000; v=\"46,43\"",
        "cache-control": "private",
        "connection": "close",
        "content-encoding": "gzip",
        "content-type": "application/json; charset=UTF-8",
        "date": "Wed, 13 Jul 2022 08:22:27 GMT",
        "etag": "\"ulwE4KhxaHPwKfX_bqN144CA7JKQmUQEciWYZB1ZGwg/7nzcpkrWBInaMZ0lX8UAfU-lVIA\"",
        "server": "ESF",
        "transfer-encoding": "chunked",
        "vary": "Origin, X-Origin, Referer",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
        "x-xss-protection": "0"
    },
    "status": 200,
    "statusText": "OK",
    "request": {
        "responseURL": "https://analytics.googleapis.com/analytics/v3/data/ga?ids=ga%3A269574420&metrics=ga%3AuniquePageviews&start-date=1daysAgo&end-date=today&sort=-ga%3AuniquePageviews&max-results=10&filters=ga%3ApagePath%3D~%2Fch_%5B-a-z0-9%5D%2B%5B.%5Dhtml%24"
    }
}