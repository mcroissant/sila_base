"""
________________________________________________________________________

:PROJECT: 

*brief summary*

:details: :

          - bullet points

:dependencies: doxygen-interface

:file:    generate_html_documentation.py

:author:  mark doerr <mark.doerr@uni-greifswald.de> : contrib.

:version: 0.0.1

:date: (creation)          20190830
:date: (last modification) 20190830
.. note:: some remarks
.. todo:: -

________________________________________________________________________

"""

import os
from types import SimpleNamespace
import logging

from pathlib import Path, PurePath

import lxml.etree as ET

from doxygen import Generator


def transformFDLmarkdown(feat_name, feat_dict,  target_dir="." ):
    """ :param [param_name]: [description]"""
    
    output_path = os.path.join(target_dir, feat_dict.path)
    
    try:
        os.makedirs(output_path) # should be tempdir in future
    except Exception :
        logging.debug("dir exists {}\n".format(output_path) )
        
    full_output_filename = os.path.join(output_path, feat_name +".md")
    
    xml_filename = feat_dict.full_name
    xsl_filename = "SiLAFDL2html_modular_md.xstl"  # markdown translation

    dom = ET.parse(xml_filename)
    xslt = ET.parse(xsl_filename)
    transform = ET.XSLT(xslt)

    with open(full_output_filename, 'w') as md_file:
        md_file.write(str(transform(dom)))
    
def genIndexAlphabetic(feature_path_dict, target_dir="."):
    """ :param [param_name]: [description]"""
    
    index_alph_filename = "feature_list_alph.md"
    
    full_output_filename = os.path.join(target_dir, index_alph_filename)
    
    markdown_txt = "# Alphabetic Feature list \n\n"
    
    for feature, feature_dict in feature_path_dict.items() :
        markdown_txt += f"[{feature}]({feature}.html)\n\n"
        
    with open(full_output_filename, 'w') as index_file :
        index_file.write( markdown_txt )
        
    
def genIndexCategories(feature_path_dict, target_dir="."):
    """ :param [param_name]: [description]"""
    
    index_alph_filename = "feature_list_categories.md"
    
    full_output_filename = os.path.join(target_dir, index_alph_filename)
    
    markdown_txt = "# Feature list by Categories \n\n"
    
    for feature, feature_dict in feature_path_dict.items() :
        
        markdown_txt += f"[{feature}]({feature_dict.path}/{feature}.html)\n\n"
        # open file
        # search for category
        # save category
        
        # sort categories
        
        # create markdown entry
        
    with open(full_output_filename, 'w') as index_file :
        index_file.write( markdown_txt )
    
def makeDoxygenDocs():
    """ :param [param_name]: [description]"""
    
    doxy_builder = Generator("./Doxyfile")
    doxy_builder.build(clean=True)
    

if __name__ == '__main__':
    """Main: """
    
    logging.basicConfig(format='%(levelname)s| %(module)s.%(funcName)s:%(message)s', level=logging.DEBUG)
    #~ logging.basicConfig(format='%(levelname)s|%(module)s.%(funcName)s:%(message)s', level=logging.ERROR)

    DEF_SILA_BASE_PATH = os.path.join( os.path.dirname(__file__), '..', '..' )
    TARGET_MD_DIR = "_docs" 
    
    try:
        os.mkdir(TARGET_MD_DIR) # should be tempdir in future
    except Exception :
        logging.debug("dir exists {}".format(TARGET_MD_DIR) )
    
    feature_path_dict = {}
    
    sila_feature_path_list = Path(DEF_SILA_BASE_PATH).glob('**/*.sila.xml')
    
    #generating a feature - path dictionary
    for feature_path in sila_feature_path_list:
         # str(feature_path.parent)# because path is object not string
         
         feature_id = PurePath(feature_path.stem).stem
         feat_path = os.path.join(*feature_path.parent.parts[2:] )
         feat_dict = SimpleNamespace(full_name=str(feature_path), path=feat_path)
         
         feature_path_dict[feature_id] = feat_dict  # because path is object not string
         
         # transform 
         transformFDLmarkdown(feature_id, feat_dict, TARGET_MD_DIR)
    
    genIndexAlphabetic(feature_path_dict, TARGET_MD_DIR)
    
    genIndexCategories(feature_path_dict, TARGET_MD_DIR)
    
    makeDoxygenDocs()
    
    
    
