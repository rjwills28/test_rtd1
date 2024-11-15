# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'Test RTD1'
author = 'RJAW'

release = '0.1'
version = '0.1.0'

# -- General configuration

extensions = [
    "myst_parser",
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
]

source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

intersphinx_mapping = {
    'rtd2': ('https://wajr-test-rtd1.readthedocs.io/projects/wajr-test-rtd2/en/latest/', None)
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output

html_theme = 'sphinx_book_theme'

# -- Options for EPUB output
epub_show_urls = 'footnote'

html_static_path = ['_static']

html_js_files = [
    'javascript/readthedocs.js',
]
