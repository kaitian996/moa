import execa from "execa"
async function build() {
    await execa("pnpm", ["--filter", "./packages/**", 'build'], {
        stdio: "inherit",
    })
}
build().then("build finished")
