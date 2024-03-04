from scrapy import Spider, Request, FormRequest
import json
import webbrowser

class CPSNBSpider(Spider):
    name = 'cpsnb_spider'

    def __init__(self, last_name, first_name, license_no, *args, **kwargs):
        super(CPSNBSpider, self).__init__(*args, **kwargs)
        self.last_name = last_name
        self.first_name = first_name
        self.license_no = license_no

    def start_requests(self):
        url = "https://cpsnb.alinityapp.com/Client/PublicDirectory/Registrants"
        formdata = {
            "queryParameters": "{\"Parameter\":[{\"ID\":\"TextOptionA\",\"Value\":\"Christopher\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"RegionSID\",\"Value\":\"-\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"graduationYear\",\"Value\":\"-\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"TextOptionB\",\"Value\":\"Stone\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"CitySID\",\"Value\":\"\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"IsCheckedOptionA\",\"Value\":\"\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"TextOptionC\",\"Value\":\"7563\",\"ValueLabel\":\"[not entered]\"},{\"ID\":\"SpecializationSID\",\"Value\":\"-\",\"ValueLabel\":\"[not entered]\"}]}",
            "querySID": "1000608"
        }
        yield FormRequest(
            url, formdata=formdata, callback=self.parse
        )

    def parse(self, response):
        rows = json.loads(response.body)["Records"]
        if len(rows) == 0:
            return {"status": "NOT FOUND"}

        if len(rows) == 1:
            status = rows[0]["prl"].lower()
            if "regular licence" in status:
                return {"status": "VERIFIED"}
            else:
                return {"status": "INACTIVE"}

        if len(rows) > 1:
            return {"status": "NOT FOUND"}

        return {"status": "NOT FOUND"}