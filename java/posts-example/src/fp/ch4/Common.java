package fp.ch4;

import java.util.List;

public interface Common<T> {
    List<T> fetchFromDB();

    List<T> findBest();
}
