import { languages } from "./constants";
import { Filters } from "./interfaces";

// Get current filters from URL and sanitize
  export const getFiltersFromUrl = (): Filters => {
    if (typeof window === "undefined") return { lastName: "", language: "" };

    const params = new URLSearchParams(window.location.search);

    // Sanitize lastName
    let lastName = (params.get("lastName") || "").trim().slice(0, 50);

    // Validate language
    let language = params.get("language") || "";
    const validLanguages = languages.map((l) => l.value);
    if (!validLanguages.includes(language)) language = "";

    // Auto-redirect to sanitized URL if needed
    const urlParams = new URLSearchParams();
    if (lastName) urlParams.set("lastName", lastName);
    if (language) urlParams.set("language", language);
    const sanitizedUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}`;
    if (sanitizedUrl !== window.location.href) {
      window.history.replaceState({}, "", sanitizedUrl);
    }

    return { lastName, language };
  };