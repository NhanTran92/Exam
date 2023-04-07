function printInformation(name: string, email?: string) {
  if (email != undefined) {
    console.log(` Tôi là ${name}. Email của tôi là ${email} `);
  } else {
    console.log(` Tôi là ${name}. Tôi chưa có Email  `);
  }
}
printInformation("Nam", "Namvv20@gmail.com");
printInformation("Nam");
