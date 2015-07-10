<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];
 
header('Access-Control-Allow-Origin: melaniebossert.com');
 
header('Content-Type: application/json');
 
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');
 
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "xxx",
    'oauth_access_token_secret' => "xxx",
    'consumer_key' => "xxx",
    'consumer_secret' => "xxx"
);
 
 
/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
 
$url = 'https://api.twitter.com/1.1/users/lookup.json';
$getfield = '?'.$_SERVER['QUERY_STRING'];
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
 
$api_response = $twitter ->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();
 
echo $api_response;
?>