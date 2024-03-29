module PlausibleSite
  class Generator < Jekyll::Generator
    def generate(site)
      return if site.config["serving"]

      changes = site.collections["changes"].docs.last
      File.write('changes.txt', changes.date.strftime("%F"))
    end
  end
end
