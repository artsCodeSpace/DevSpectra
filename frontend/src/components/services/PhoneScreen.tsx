import type { ServiceKey } from "./service-data";
import { WebAppScreen } from "./screens/WebAppScreen";
import { EcommerceScreen } from "./screens/EcommerceScreen";
import { BrandingScreen } from "./screens/BrandingScreen";
import { MarketingScreen } from "./screens/MarketingScreen";

export function PhoneScreen({ service }: { service: ServiceKey }) {
  return (
    <div key={service} className="absolute inset-0 animate-fade-in">
      {service === "webdev" && <WebAppScreen />}
      {service === "ecommerce" && <EcommerceScreen />}
      {service === "branding" && <BrandingScreen />}
      {service === "marketing" && <MarketingScreen />}
    </div>
  );
}
