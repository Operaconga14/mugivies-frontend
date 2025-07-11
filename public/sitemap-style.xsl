<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/urlset">
        <html>
            <head>
                <title>Sitemap</title>
            </head>
            <body>
                <h1>Sitemap</h1>
                <ul>
                    <xsl:for-each select="url">
                        <li>
                            <a href="{loc}"><xsl:value-of select="loc"/></a><br/>
                            <xsl:value-of select="lastmod"/><br/>
                            Priority: <xsl:value-of select="priority"/>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
