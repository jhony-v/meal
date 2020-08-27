test("should test with enver", () => {
	let number = 24;
	expect(number % 2).toBe(0);
	expect(number).toBeGreaterThan(20);
	expect(number).toBeLessThan(30);
});

const colors = ["red", "green", "blue", "yellow", "sky blue"];

test('should contain a color into array "colors"', () => {
	expect(colors).toContain("red");
});

const requestJSONFromAPI = async () => {
	const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await request.json();
	return data;
};

test("should asynchronous test to get data from api", async () => {
	const dataVerify = {
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false,
	};
	const request = await requestJSONFromAPI();
	return expect(request).toStrictEqual(dataVerify);
});
