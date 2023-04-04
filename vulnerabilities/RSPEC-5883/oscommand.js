async function (req, res) {
    await execa.command('find /tmp/images/' + req.query.id); // Noncompliant
}