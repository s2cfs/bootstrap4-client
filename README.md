# S2CFS Bootstrap4 Client

S2CFS is a paid contact form API service. We are providing this service to people who are willing to pay a minimum usage fee instead of aggreeing to uncomprehensible privacy policies and terms, which end up profiting from the users personal data.

Our motto: 
```
Pay with money, not with your data.
```

Our service was designed with the following principles in mind

- Security
- Privacy
- Availability
- Fault tolerance
- Low costs

Visit https://s2cfs.com for more info.

## Client.js

In case you do not wish to spend time creating a custom form design, S2CFS comes with Bootstrap4 support and integrates with all of the Bootstrap4 form features. Go to https://s2cfs.com/help#bootstrap4 to learn more.

In order to make S2CFS work with your Bootstrap4 form, you need to append a client script to the `<body>` of your website.

```
<script>
    window.cf=window.cf||function(b,c){cf.a=cf.a||[b,c]};
    cf('contact@example.com', 'test-api-key');
</script>
<script async src='https://s2cfs.com/client.js'></script>
```

You can find the source of this `client.js` in this repository. The repository is here to provide some example code you can copy, modify or use in your project, in case you wish to create a custom form design.
