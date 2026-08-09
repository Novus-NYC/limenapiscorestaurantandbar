import { Button } from "@/components/ui/kit"

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70svh] flex-col justify-center py-32">
      <p className="label">404</p>
      <h1 className="mt-6 max-w-[16ch] font-display text-display-lg text-ink">
        This page isn&apos;t on the menu
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/75">
        The link may be old, or we may have moved it. The food is all still here.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/menu">View the menu</Button>
        <Button href="/" variant="outline">
          Back home
        </Button>
      </div>
    </div>
  )
}
