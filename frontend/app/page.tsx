export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#faf9f7] px-6 py-12">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-[8%] top-[12%] text-7xl text-stone-200/50">
        🐾
      </div>

      <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full bg-orange-100/40" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full bg-orange-100/30" />

      {/* Login */}
      <section className="relative z-10 w-full max-w-xl rounded-[2rem] bg-white px-8 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-14">
        {/* Brand */}
        <div className="mb-12 text-center">
          <div className="mb-3 text-5xl">🐾</div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-800">
            AllPet<span className="text-orange-500">Social</span>
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Let the pets do the talking
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-5 text-zinc-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Password"
              className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-5 text-zinc-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600"
          >
            Log in
          </button>
        </form>

        {/* Social login separator */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-sm text-zinc-400">or continue with</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        {/* Social providers */}
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className="flex h-14 items-center justify-center rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Google
          </button>

          <button
            type="button"
            className="flex h-14 items-center justify-center rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Apple
          </button>

          <button
            type="button"
            className="flex h-14 items-center justify-center rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Facebook
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-zinc-400">
          New to AllPetSocial?{" "}
          <button
            type="button"
            className="font-semibold text-orange-500 hover:text-orange-600"
          >
            Create an account
          </button>
        </p>
      </section>
    </main>
  );
}