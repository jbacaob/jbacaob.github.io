# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.6"

# Newer Nokogiri releases provide better compatibility with modern Ruby on Windows.
gem "nokogiri", ">= 1.18.0", "< 2.0"

# Ruby 3.4+ no longer ships some stdlib components as default gems.
gem "csv"
gem "logger"
gem "base64"
gem "bigdecimal"

group :test do
  gem "html-proofer", "~> 5.0"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.2.0", :platforms => [:windows]
