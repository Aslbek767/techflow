import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About - TechFlow",
  description: "Learn more about TechFlow and our mission to simplify maintenance management.",
};

export default function AboutPage() {
  const t = useTranslations();


  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-20 bg-techflow-dark">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.header')}
            </h1>
            <p className="text-xl text-techflow-light/80">
              {t('about.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('about.content-title')}</h2>
              <div className="space-y-4">
                <p className="text-techflow-light/80">
                { t('about.content-description-1') }
                </p>
                <p className="text-techflow-light/80">
                { t('about.content-description-2') }
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">{t('about.stat-label-1')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">85%</div>
                <div className="stat-label">{t('about.stat-label-2')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50%</div>
                <div className="stat-label">{t('about.stat-label-3')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3.5x</div>
                <div className="stat-label">{t('about.stat-label-4')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-techflow-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('features.header')}</h2>
            <p className="text-lg text-techflow-light/80 max-w-3xl mx-auto">
              {t('features.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card">
              <div className="mb-4 p-2 rounded-full bg-blue-500/20 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4" />
                  <path d="M9 17h.01" />
                  <path d="M9 13h.01" />
                  <path d="M13 13h.01" />
                  <path d="M13 17h.01" />
                  <path d="M17 17h.01" />
                  <path d="M17 13h.01" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.card-1-title')}</h3>
              <p className="text-sm text-techflow-light/70">
                {t('features.card-1-desc')}
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-4 p-2 rounded-full bg-blue-500/20 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.card-2-title')}</h3>
              <p className="text-sm text-techflow-light/70">
                {t('features.card-2-desc')}
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-4 p-2 rounded-full bg-blue-500/20 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="8" height="8" x="3" y="3" rx="2" />
                  <rect width="8" height="8" x="13" y="3" rx="2" />
                  <rect width="8" height="8" x="3" y="13" rx="2" />
                  <rect width="8" height="8" x="13" y="13" rx="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.card-3-title')}</h3>
              <p className="text-sm text-techflow-light/70">
                {t('features.card-3-desc')}
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-4 p-2 rounded-full bg-blue-500/20 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
                  <line x1="18" x2="12" y1="9" y2="15" />
                  <line x1="12" x2="18" y1="9" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.card-4-title')}</h3>
              <p className="text-sm text-techflow-light/70">
                {t('features.card-4-title')}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-md">
              {t('features.btn_text')}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              {t('maintenance.header')}
            </h2>
            <p className="text-lg text-techflow-light/80 max-w-3xl mx-auto">
              {t('maintenance.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-item">
                <div className="stat-number">43%</div>
                <h3 className="text-xl font-bold mb-2">{t('maintenance.card-1-title')}</h3>
                <p className="text-sm text-center text-techflow-light/70">
                  {t('maintenance.card-1-desc')}
                </p>
              </div>
              <div className="stat-item">
                <div className="stat-number">87%</div>
                <h3 className="text-xl font-bold mb-2">{t('maintenance.card-2-title')}</h3>
                <p className="text-sm text-center text-techflow-light/70">
                  {t('maintenance.card-2-desc')}
                </p>
              </div>
              <div className="stat-item">
                <div className="stat-number">62%</div>
                <h3 className="text-xl font-bold mb-2">{t('maintenance.card-3-title')}</h3>
                <p className="text-sm text-center text-techflow-light/70">
                  {t('maintenance.card-3-desc')}
                </p>
              </div>
              <div className="stat-item">
                <div className="stat-number">35%</div>
                <h3 className="text-xl font-bold mb-2">{t('maintenance.card-4-title')}</h3>
                <p className="text-sm text-center text-techflow-light/70">
                  {t('maintenance.card-4-desc')}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                {t('maintenance.content-title')}
              </h3>
              <p className="text-techflow-light/80 mb-6">
                {t('maintenance.content_desc')}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
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
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-techflow-light/80">
                    {t('maintenance.content-item-1')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
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
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-techflow-light/80">
                  {t('maintenance.content-item-2')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
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
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-techflow-light/80">
                    {t('maintenance.content-item-3')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
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
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-techflow-light/80">
                    {t('maintenance.content-item-4')}
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Button className="rounded-md">{t('maintenance.btn_text')}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
