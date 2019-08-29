#!/usr/bin/env python
"""
________________________________________________________________________

:PROJECT: SiLA2_python

*SiLA2 FDL to markdown / html translator *

:details: SiLA2 FDL to markdown / html translator:


:file:    fdl2html_by_xstl.py
:authors: mark doerr (mark@uni-greifswald.de)

:date: (creation)          2019-08-19
:date: (last modification) 2019-08-29

.. note:: - ! xstl with namespaces !!
.. todo:: - selector for markdown or xml output
________________________________________________________________________

**Copyright**:
  This file is provided "AS IS" with NO WARRANTY OF ANY KIND,
  INCLUDING THE WARRANTIES OF DESIGN, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

  For further Information see LICENSE file that comes with this distribution.
________________________________________________________________________
"""
__version__ = "0.2.4"

import lxml.etree as ET

def main(args):
    """param: args."""

    xml_filename = "SiLAService.sila.xml" # example FDL
    #xsl_filename = "SiLAFDL2html_modular_html.xstl"
    #xsl_filename = "SiLAFDL2html_modular_tab.xstl"
    xsl_filename = "SiLAFDL2html_modular_md.xstl"  # markdown translation

    dom = ET.parse(xml_filename)
    xslt = ET.parse(xsl_filename)
    transform = ET.XSLT(xslt)

    newdom = transform(dom)

    print(newdom)

    #~ print(ET.tostring(newdom, pretty_print=True))

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
