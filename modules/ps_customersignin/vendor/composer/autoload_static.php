<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite585c0a514b1d3ad15fda563329f0822
{
    public static $classMap = array (
        'Ps_CustomerSignIn' => __DIR__ . '/../..' . '/ps_customersignin.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInite585c0a514b1d3ad15fda563329f0822::$classMap;

        }, null, ClassLoader::class);
    }
}