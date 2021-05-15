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
configure :development do
  activate :livereload
end

ENV["base-url"] = "/"

activate :dotenv
activate :directory_indexes

activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "{title}.html"
  blog.layout = "blog_layout"
end

# Source Date

helpers do
  def format_date(date_txt)
    date = Date.parse(date_txt)
    date.strftime("%B")
  end
end

activate :contentful do |f|
  f.space         = { site: ENV['CONTENTFUL_SPACE_ID'] }
  f.access_token  = ENV['CONTENTFUL_ACCESS_TOKEN']
  f.content_types = { source: 'source', track: 'track', beattapes: 'beattapes', producer: 'producer'}
end

# ignore 'templates/*.html'
if @app.data.try(:site).try(:beattapes)
  data.site.beattapes.each do |id, tapes|
    proxy "/tapes/#{tapes[1]['tape_id'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}", "/tapes/template", 
    :locals => { :tapes => tapes[1], :tape_id => tapes.tape_id }, 
    :ignore => true
  end
end



# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end
