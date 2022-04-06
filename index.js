require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const bcrypt = require("bcrypt");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const connection = require("./connection");
const User = require("./models/user");
//npm start -- --register --name "billygruff" --fullname "bill jones" --password "password"
(async (argv) => {
    await  User.sync({alter: true});

    if(argv.register && argv.name && argv.fullname && argv.password) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPass = await bcrypt.hash(argv.password, salt);
        
        const user = await User.create({name: argv.name, fullname: argv.fullname, password: hashedPass});
    } else if(argv.getuser && argv.name && argv.password) {
        const user = await User.findOne({where: {name: argv.name}});
        
        if(!user) {
            console.log("Invalid user");
        }
        
        const matched = await bcrypt.compare(argv.password, user.password);
        if(matched) {
            console.log(`${user.fullname} has logged in`);
        } else {
            console.log("Password is incorrect");
        }
    }

})(argv);



