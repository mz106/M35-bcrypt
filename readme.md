---register---
npm start -- --register --name "billygruff" --fullname "bill jones" --password "password"

if !name || !password
    print "please input correct details"
elif !user:
    error


--get--
npm start -- --getUser --name "bill" --password "password"

if !name || !password:
    error
elif !user:
    error
elif password does not match:
    error
else:
    return 'Hello <fullname>'

