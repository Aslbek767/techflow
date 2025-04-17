import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations()
  return (
    <footer className="pt-16 pb-6 bg-techflow-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/50">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="17" y1="7" x2="7" y2="17" />
                  <polyline points="17 17 7 17 7 7" />
                </svg>
              </div>
              <span className="text-xl font-bold">TechFlow</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {/* Streamlining maintenance processes for organizations worldwide. */}
              { t('footer.desc') }
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{ t('footer.product') }</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  { t('footer.product-1') }
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  { t('footer.product-2') }
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  { t('footer.product-3') }
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  { t('footer.product-4') }
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{ t('footer.resources') }</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                {/* { t('footer.resource-1') } */}
                  { t('footer.company-1') }
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                {/* { t('footer.resource-2') } */}

                  { t('footer.company-3') }
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                { t('footer.resource-3') }
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                { t('footer.resource-4') }
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{ t('footer.company') }</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                { t('footer.company-support') }
                </Link>
              </li>
              <li>
                <Link href="/pages" className="text-sm text-muted-foreground hover:text-primary">
                { t('footer.company-resources') }
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                { t('footer.company-3') }
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                { t('footer.company-4') }
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechFlow. { t('footer.rights-reserved') }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
