require 'slim'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# With alternative layout
# page '/path/to/file.html', layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy '/this-page-has-no-template.html', '/template-file.html', locals: {
#  which_fake_page: 'Rendering a fake page with a local variable' }

###
# Helpers
###

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# activate :external_pipeline,
#            name: :webpack,
#            command: build? ? "yarn run build" : "yarn run start",
#            source: ".tmp/dist",
#            latency: 1

activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "{title}.html"
  blog.layout = "blog_layout"
end

activate :dotenv
activate :contentful do |f|
  f.space         = { site: ENV['CONTENTFUL_SPACE_ID'] }
  f.access_token  = ENV['CONTENTFUL_ACCESS_TOKEN']
  f.content_types = { micro: 'micro', source: 'source', vault: 'vault' }
end

# Source Date
# helpers do
#   def format_date(date_txt)
#     date = Date.parse(date_txt)
#     date.strftime("%B")
#   end
# end

# activate :contentful do |f|
#   g.space         = { site: ENV['CONTENTFUL_SPACE_ID'] }
#   g.access_token  = ENV['CONTENTFUL_ACCESS_TOKEN']
#   g.content_types = { source: 'source' }
# end

activate :directory_indexes


# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end
