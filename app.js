let company = ["wilson", "budokai", "shuang", "intevidia"];
let industry = ["medical", "tech", "food", "sports"];
let service = ["pills", "phones", "pizzas", "balls"];
let exten = [".com", ".net", ".es", ".io"];
for (const comName of company) {
	for (const indName of industry) {
		for (const serName of service) {
			for (const extName of exten) {
				console.log(`${comName}${indName}${serName}${extName}`);
			}
		}
	}
}