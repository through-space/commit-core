export const repoExampleJson = JSON.stringify([{
	"id": "JsonTestRepo",
	"mainBranchID": "branchID_1",
	"branches": {
		"branchID_1": {
			"id": "branchID_1",
			"name": "main"
		},
		"branchID_2": {
			"id": "branchID_2",
			"name": "mind",
			"contributionValue": 10,
			"connections": [
				{
					"type": "CHILD",
					"branchName": "branchID_1"
				}
			]
		},
		"branchID_3": {
			"id": "branchID_3",
			"name": "read",
			"contributionValue": 4,
			"connections": [
				{
					"type": "CHILD",
					"branchName": "branchID_3"
				}
			]
		}
	}
}]);
