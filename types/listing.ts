export interface Listing {
    id: number;
    name: string;
    host_id: number;
    neighbourhood: string;
    room_type: string;
    column_10: number; // Assuming column_10 has a numeric value
    minimum_nights: number;
    number_of_reviews: number;
    last_review: string; // Assuming last_review is a date string in YYYY-MM-DD format
    reviews_per_month: number;
    calculated_host_listings_count: number;
    availability_365: number;
    updated_date: string; // Assuming updated_date is a date string in YYYY-MM-DD format
    city: string;
    column_19: string; // Assuming column_19 has a string value
    coordinates: {
        lon: number;
        lat: number;
    };
    column_20: string; // Assuming column_20 has a string value
}

export interface AirbnbListing {
    id: string,
    listing_url: string,
    scrape_id: string,
    last_scraped: string,
    name: string,
    summary: string,
    space: string,
    description: string,
    experiences_offered: string,
    neighborhood_overview: string,
    notes: string,
    transit: string,
    access: string,
    interaction: string,
    house_rules: string,
    thumbnail_url: string,
    medium_url: string,
    picture_url: {
        thumbnail: boolean,
        filename: string,
        format: string,
        width: number,
        mimetype: string,
        etag: string,
        id: string,
        last_synchronized: string,
        color_summary: Array<string>,
        height: number
    },
    xl_picture_url: string,
    host_id: string,
    host_url: string,
    host_name: string,
    host_since: string,
    host_location: string,
    host_about: string,
    host_response_time: string,
    host_response_rate: number,
    host_acceptance_rate: null | number,
    host_thumbnail_url: string,
    host_picture_url: string,
    host_neighbourhood: string,
    host_listings_count: number,
    host_total_listings_count: number,
    host_verifications: Array<string>,
    street: string,
    neighbourhood: string,
    neighbourhood_cleansed: string,
    neighbourhood_group_cleansed: string,
    city: string,
    state: string,
    zipcode: string,
    market: string,
    smart_location: string,
    country_code: string,
    country: string,
    latitude: string,
    longitude: string,
    property_type: string,
    room_type: string,
    accommodates: number,
    bathrooms: number,
    bedrooms: number,
    beds: number,
    bed_type: string,
    amenities: Array<string>,
    square_feet: null | string | number,
    price: number,
    weekly_price: number,
    monthly_price: number,
    security_deposit: null | number,
    cleaning_fee: null | number,
    guests_included: number,
    extra_people: number,
    minimum_nights: number,
    maximum_nights: number,
    calendar_updated: string,
    has_availability: null | string | number,
    availability_30: number,
    availability_60: number,
    availability_90: number,
    availability_365: number,
    calendar_last_scraped: string,
    number_of_reviews: number,
    first_review: string,
    last_review: string,
    review_scores_rating: number,
    review_scores_accuracy: number,
    review_scores_cleanliness: number,
    review_scores_checkin: number,
    review_scores_communication: number,
    review_scores_location: number,
    review_scores_value: number,
    license: null | string,
    jurisdiction_names: null | Array<string>,
    cancellation_policy: string,
    calculated_host_listings_count: number,
    reviews_per_month: number,
    geolocation: { lon: number, lat: number },
    features: Array<string>
}