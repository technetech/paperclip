import * as React from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageNames: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  "pt-BR": "Português (Brasil)",
  "pt-PT": "Português (Portugal)",
  ja: "日本語",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ar: "العربية",
  hi: "हिन्दी",
  ru: "Русский",
  ko: "한국어",
  bn: "বাংলা",
  cs: "Čeština",
  da: "Dansk",
  el: "Ελληνικά",
  fa: "فارسی",
  fi: "Suomi",
  fil: "Filipino",
  he: "עברית",
  hu: "Magyar",
  id: "Bahasa Indonesia",
  mr: "मराठी",
  ms: "Bahasa Melayu",
  nb: "Norsk Bokmål",
  nl: "Nederlands",
  pa: "ਪੰਜਾਬੀ",
  pl: "Polski",
  ro: "Română",
  sv: "Svenska",
  sw: "Kiswahili",
  ta: "தமிழ்",
  te: "తెలుగు",
  th: "ไทย",
  tr: "Türkçe",
  uk: "Українська",
  ur: "اردو",
  vi: "Tiếng Việt",
};

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || "en";
  const supportedLngs = (i18n.options?.supportedLngs || ["en", "es"]) as string[];
  const activeLngs = supportedLngs.filter((lng) => lng !== "cimode");

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="w-auto px-2 flex items-center gap-1.5 shrink-0" aria-label="Select language">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium uppercase">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-80 overflow-y-auto">
        {activeLngs.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={`cursor-pointer ${currentLanguage === lng ? "bg-accent font-semibold" : ""}`}
          >
            {languageNames[lng] || lng.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
