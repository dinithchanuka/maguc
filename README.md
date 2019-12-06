## Hacktoberfest 2019 Special Announcement

[Hacktoberfest](https://hacktoberfest.digitalocean.com) is back again for this year. Go to its site and register first.

Just add 4 wonderful yet easy pull requests to this repo and stand a chance to win a limited edition Hacktoberfest shirt.

You can send PRs throughout the month of October. Don't miss out...

### How to contribute?

1. [Fork](https://github.com/Niweera/maguc/fork) this repo.
2. Clone the forked repo to your computer.

   `git clone https://github.com/<Your-Username>/maguc.git`

3. Look for the file `/presets.go`
4. Look for your country.
5. Add cities you know. (Please add the city in lowercase letters.)
6. Send a PR.
7. Done.

> Example:

Before:

    "sri lanka":    PresetLocations{"sri%2Blanka", "balangoda", "ratnapura", "colombo", "moratuwa", "negombo", "galle", "jaffna"},

Add `kalutara`:

    "sri lanka":    PresetLocations{"sri%2Blanka", "balangoda", "ratnapura", "colombo", "moratuwa", "negombo", "galle", "jaffna", "kalutara"},

Run the executable with:

`mau.exe --token <Your_GITHUB_Token> --preset "sri lanka" --amount 500 --consider 1000 output plain > user_list.txt`
