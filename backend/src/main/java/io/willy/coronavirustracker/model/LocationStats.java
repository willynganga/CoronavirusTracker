package io.willy.coronavirustracker.model;

public class LocationStats {
    private String state;

    private String country;
    private int latestCases;
    private int prevDayCases;
    private int diffFromPrevDay;

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }


    public int getDiffFromPrevDay() {
        return diffFromPrevDay;
    }

    public void setDiffFromPrevDay(int diffFromPrevDay) {
        this.diffFromPrevDay = diffFromPrevDay;
    }

    public int getLatestCases() {
        return latestCases;
    }

    public void setLatestCases(int latestCases) {
        this.latestCases = latestCases;
    }

    public int getPrevDayCases() {
        return prevDayCases;
    }

    public void setPrevDayCases(int prevDayCases) {
        this.prevDayCases = prevDayCases;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "LocationStats{"
                + "country='" + country + '\''
                + ", latestTotalCases=" + latestCases
                + '}';
    }
}
