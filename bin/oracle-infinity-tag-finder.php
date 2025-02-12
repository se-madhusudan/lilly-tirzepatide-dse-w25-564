#!/usr/bin/env php
<?php

/**
 * It is possible to test locally by injecting the environment variable into the shell.
 * export ENVIRONMENT=uat
 * export PROJECT_PATH="psychiatryadvisor.com"
 */


/**
 * Class Oracle_Infinity_Tag_finder
 *
 * This class is used for finding tags based on the given site.
 */
class Oracle_Infinity_Tag_finder {
    const SITE_TAGS = [
        "empr.com"                     => "empr_tag",
        "psychiatryadvisor.com"        => "pa_tag",
        "endocrinologyadvisor.com"     => "ea_tag",
        "neurologyadvisor.com"         => "na_tag",
        "clinicaladvisor.com"          => "ca_tag",
        "cancertherapyadvisor.com"     => "cta_tag",
        "oncologynurseadvisor.com"     => "ona_tag",
        "hematologyadvisor.com"        => "ha_tag",
        "clinicalpainadvisor.com"      => "cpa_tag",
        "infectiousdiseaseadvisor.com" => "ida_tag",
        "thecardiologyadvisor.com"     => "tca_tag",
        "rheumatologyadvisor.com"      => "ra_tag",
        "medicalbag.com"               => "mb_tag",
        "dermatologyadvisor.com"       => "da_tag",
        "pulmonologyadvisor.com"       => "pulm_tag",
        "renalandurologynews.com"      => "run_tag",
        "gastroenterologyadvisor.com"  => "ga_tag",
        "ophthalmologyadvisor.com"     => "oa_tag",
        "rarediseaseadvisor.com"       => "rda_tag",
        "optometryadvisor.com"         => "opto_tag",
        "vaccineadvisor.com"           => "va_tag",
        "sleepwakeadvisor.com"         => "swa_tag",
        "mmm-online.com"               => "mmm_tag",
        "mcknightsseniorliving.com"    => "msl_tag",
        "haymarketmediadev.com"        => "hmeng_tag",
        "mcknights.com"                => "mck_tag",
        "mcknightshomecare.com"        => "mhc_tag",
    ];

    public function __construct () {
        echo $this->get_tag();
    }

    /**
     * Retrieves the tag string.
     *
     * This method concatenates the tag path and the tag environment
     * to form the complete tag string.
     *
     * @return string The complete tag string.
     */
    private function get_tag(): string {
        $tag  = "";
        $tag .= $this->get_tag_path();
        if ( !empty( $tag ) ) {
            $tag .= $this->get_tag_env();
        }
        return ltrim( $tag );
    }

    /**
     * @return string
     */
    private function get_tag_path(): string {
        $tag_path = getenv( 'PROJECT_PATH' ) ?? "";
        if ( array_key_exists( $tag_path, self::SITE_TAGS ) ) {
            return self::SITE_TAGS[$tag_path];
        }
        return "";
    }

     /**
      * @return string
      */
    private function get_tag_env(): string {
         if ( getenv( 'ENVIRONMENT' ) !== 'prod' ) {
             return "/odc.js?_ora.config=analytics:test";
         }
         return "/odc.js";
    }
}

$oitf = new Oracle_Infinity_Tag_finder();
