import type { ReactNode } from "react";
import { contact, mailto } from "../data/portfolio";
import { MailIcon, GithubIcon, LinkedinIcon, DownloadIcon } from "./icons";

function ContactRow({
  href,
  icon,
  label,
  value,
  external,
  download,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      className="contact-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      download={download}
    >
      <span
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          flex: "none",
        }}
      >
        {icon}
      </span>
      <span style={{ minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: ".14em",
            color: "rgba(255,255,255,.5)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            display: "block",
            color: "#fff",
            fontSize: 14.5,
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </span>
      </span>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" style={{ padding: "90px 0 40px" }}>
      <div
        data-reveal
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#172033",
          borderRadius: 30,
          padding: "60px clamp(28px,5vw,72px)",
          boxShadow: "0 50px 90px -50px rgba(23,32,51,.8)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
            backgroundSize: "38px 38px",
            WebkitMaskImage: "radial-gradient(circle at 80% 0,#000,transparent 70%)",
            maskImage: "radial-gradient(circle at 80% 0,#000,transparent 70%)",
          }}
        />
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".22em",
                color: "rgba(255,255,255,.5)",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              05 — Contact
            </div>
            <h2
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: "clamp(34px,4.4vw,54px)",
                letterSpacing: "-.025em",
                marginTop: 14,
                color: "#fff",
                lineHeight: 1.02,
              }}
            >
              Let's build
              <br />
              something.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.7)",
                marginTop: 18,
                maxWidth: 380,
              }}
            >
              Open to software engineering roles and interesting collaborations. The
              fastest way to reach me is email — I usually reply within a day.
            </p>
            <a
              href={mailto}
              className="btn"
              style={{
                marginTop: 26,
                background: "#fff",
                color: "#172033",
                padding: "15px 26px",
                borderRadius: 14,
              }}
            >
              <MailIcon /> Email me
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ContactRow href={mailto} icon={<MailIcon size={18} />} label="Email" value={contact.email} />
            <ContactRow
              href={contact.githubUrl}
              external
              icon={<GithubIcon size={20} />}
              label="GitHub"
              value={contact.githubLabel}
            />
            <ContactRow
              href={contact.linkedinUrl}
              external
              icon={<LinkedinIcon size={18} />}
              label="LinkedIn"
              value={contact.linkedinLabel}
            />
            <ContactRow
              href={contact.resumeHref}
              download
              icon={<DownloadIcon size={18} />}
              label="Resume"
              value="Download résumé"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
