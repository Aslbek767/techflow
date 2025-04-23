import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
	defaultLocale: 'en',
	locales: ['en', 'ru', 'uz', 'ja'],
})

const { Link, getPathname, permanentRedirect, redirect, usePathname, useRouter } = createNavigation(routing)

export { permanentRedirect, getPathname, usePathname, useRouter, redirect, routing, Link }