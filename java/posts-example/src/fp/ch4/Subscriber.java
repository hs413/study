package fp.ch4;

import java.util.List;

public class Subscriber implements Common<Subscriber> {

    @Override
    public List<Subscriber> fetchFromDB() {
        return List.of();
    }

    @Override
    public List<Subscriber> findBest() {
        return List.of();
    }
}
